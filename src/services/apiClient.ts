const getApiBaseUrl = (): string => {
  const envUrl = (import.meta as any).env?.VITE_API_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim()) {
    return envUrl.trim();
  }
  if (typeof window !== 'undefined' && window.location) {
    const origin = window.location.origin;
    if (origin && !origin.includes('localhost') && !origin.includes('127.0.0.1')) {
      return `${origin}/api/v1`;
    }
  }
  return 'http://localhost:8000/api/v1';
};

const API_BASE_URL = getApiBaseUrl();

export const resolvePhotoUrl = (url?: string | null): string => {
  if (!url) return 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  const root = API_BASE_URL.replace(/\/api\/v1\/?$/, '');
  return `${root}${url.startsWith('/') ? '' : '/'}${url}`;
};

export const getCustomFacultyPhoto = (key?: string | null): string | null => {
  if (!key) return null;
  try {
    const raw = localStorage.getItem('pocketuni_custom_faculty_photos');
    if (!raw) return null;
    const cache = JSON.parse(raw);
    return cache[key] || cache[key.toLowerCase()] || null;
  } catch (_) {
    return null;
  }
};

export const saveCustomFacultyPhoto = (keys: (string | undefined | null)[], photoUrl: string) => {
  try {
    const raw = localStorage.getItem('pocketuni_custom_faculty_photos') || '{}';
    const cache = JSON.parse(raw);
    for (const k of keys) {
      if (k) {
        cache[k] = photoUrl;
        cache[k.toLowerCase()] = photoUrl;
      }
    }
    localStorage.setItem('pocketuni_custom_faculty_photos', JSON.stringify(cache));
  } catch (_) {}
};

export const deleteCustomFacultyPhoto = (keys: (string | undefined | null)[]) => {
  try {
    const raw = localStorage.getItem('pocketuni_custom_faculty_photos') || '{}';
    const cache = JSON.parse(raw);
    for (const k of keys) {
      if (k) {
        delete cache[k];
        delete cache[k.toLowerCase()];
      }
    }
    localStorage.setItem('pocketuni_custom_faculty_photos', JSON.stringify(cache));
  } catch (_) {}
};

class ApiClient {
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem('pocketuni_token');
  }

  public setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem('pocketuni_token', token);
    } else {
      localStorage.removeItem('pocketuni_token');
    }
  }

  public getToken(): string | null {
    return this.token || localStorage.getItem('pocketuni_token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers: Record<string, string> = {
      ...(options.headers as Record<string, string>),
    };

    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    if (!(options.body instanceof FormData) && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        let errorMsg = `HTTP Error ${response.status}`;
        try {
          const errData = await response.json();
          errorMsg = errData.detail || errData.message || errorMsg;
        } catch (_) {}
        throw new Error(errorMsg);
      }

      return (await response.json()) as T;
    } catch (err: any) {
      console.warn(`[API Client] ${options.method || 'GET'} ${endpoint} failed:`, err.message);
      throw err;
    }
  }

  // Auth
  public async getDemoAccounts() {
    return this.request<any[]>('/auth/demo-accounts');
  }

  public async sandboxLogin(role: 'SUPER_ADMIN' | 'STUDENT' | 'FACULTY') {
    const data = await this.request<any>('/auth/sandbox-login', {
      method: 'POST',
      body: JSON.stringify({ role }),
    });
    if (data.access_token) {
      this.setToken(data.access_token);
    }
    return data;
  }

  public async devLogin(email: string) {
    const data = await this.request<any>('/auth/dev-login', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    if (data.access_token) {
      this.setToken(data.access_token);
    }
    return data;
  }

  public async getMe() {
    return this.request<any>('/auth/me');
  }

  public async logout() {
    try {
      await this.request('/auth/logout', { method: 'POST' });
    } finally {
      this.setToken(null);
    }
  }

  // Students
  public async getMyStudentProfile() {
    return this.request<any>('/students/me');
  }

  public async updateMyStudentProfile(updates: any) {
    return this.request<any>('/students/me', {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  public async uploadAvatar(file?: File) {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    return this.request<any>('/students/me/avatar/upload', {
      method: 'POST',
      body: formData,
    });
  }

  public async removeAvatar() {
    return this.request<any>('/students/me/avatar', {
      method: 'DELETE',
    });
  }

  public async getStudentDiscovery(
    queryOrParams?: string | {
      query?: string;
      gender?: string;
      branch?: string;
      year?: string;
      semester?: string;
      domain?: string;
      skill?: string;
      experience?: string;
      looking_for?: string;
      availability?: string;
      open_to?: string;
      hackathons_only?: boolean;
    },
    branch?: string,
    hackathonsOnly?: boolean
  ) {
    const params = new URLSearchParams();
    if (typeof queryOrParams === 'object' && queryOrParams !== null) {
      if (queryOrParams.query) params.append('query', queryOrParams.query);
      if (queryOrParams.gender && queryOrParams.gender !== 'All') params.append('gender', queryOrParams.gender);
      if (queryOrParams.branch && queryOrParams.branch !== 'All') params.append('branch', queryOrParams.branch);
      if (queryOrParams.year && queryOrParams.year !== 'All') params.append('year', queryOrParams.year);
      if (queryOrParams.semester && queryOrParams.semester !== 'All') params.append('semester', queryOrParams.semester);
      if (queryOrParams.domain && queryOrParams.domain !== 'All') params.append('domain', queryOrParams.domain);
      if (queryOrParams.skill && queryOrParams.skill !== 'All') params.append('skill', queryOrParams.skill);
      if (queryOrParams.experience && queryOrParams.experience !== 'All') params.append('experience', queryOrParams.experience);
      if (queryOrParams.looking_for && queryOrParams.looking_for !== 'All') params.append('looking_for', queryOrParams.looking_for);
      if (queryOrParams.availability && queryOrParams.availability !== 'All') params.append('availability', queryOrParams.availability);
      if (queryOrParams.open_to && queryOrParams.open_to !== 'All') params.append('open_to', queryOrParams.open_to);
      if (queryOrParams.hackathons_only) params.append('hackathons_only', 'true');
    } else {
      if (queryOrParams) params.append('query', queryOrParams);
      if (branch) params.append('branch', branch);
      if (hackathonsOnly) params.append('hackathons_only', 'true');
    }
    const qs = params.toString();
    return this.request<any[]>(`/students/discovery${qs ? `?${qs}` : ''}`);
  }

  // Faculty
  public async getFacultyDirectory(department?: string, search?: string) {
    const params = new URLSearchParams();
    if (department) params.append('department', department);
    if (search) params.append('search', search);
    return this.request<any[]>(`/faculty/directory?${params.toString()}`);
  }

  public async getFacultyProfile(facultyId: string) {
    return this.request<any>(`/faculty/${encodeURIComponent(facultyId)}`);
  }

  public async getFacultyTimetable(facultyId: string, day?: string) {
    const params = new URLSearchParams();
    if (day) params.append('day', day);
    return this.request<any>(`/faculty/${encodeURIComponent(facultyId)}/timetable?${params.toString()}`);
  }

  public async uploadFacultyPhoto(facultyId: string, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.request<any>(`/faculty/${encodeURIComponent(facultyId)}/photo`, {
      method: 'POST',
      body: formData,
    });
  }

  public async deleteFacultyPhoto(facultyId: string) {
    return this.request<any>(`/faculty/${encodeURIComponent(facultyId)}/photo`, {
      method: 'DELETE',
    });
  }

  // Applications
  public async listApplications() {
    return this.request<any[]>('/applications/');
  }

  public async getApplication(id: string) {
    return this.request<any>(`/applications/${id}`);
  }

  public async createApplication(payload: { title: string; type: string; content: string; facultyId?: string }) {
    return this.request<any>('/applications/', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  public async updateApplication(id: string, payload: { content?: string; title?: string }) {
    return this.request<any>(`/applications/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  }

  public async shareApplication(id: string, facultyId: string, note?: string) {
    return this.request<any>(`/applications/${id}/share`, {
      method: 'POST',
      body: JSON.stringify({ facultyId, note }),
    });
  }

  public async decideApplication(id: string, decision: 'approved' | 'rejected' | 'revision_requested', note?: string) {
    return this.request<any>(`/applications/${id}/decide`, {
      method: 'POST',
      body: JSON.stringify({ decision, note }),
    });
  }

  public async deleteApplication(id: string) {
    return this.request<any>(`/applications/${id}`, {
      method: 'DELETE',
    });
  }

  // Documents (Super Admin & Audience)
  public async uploadDocument(
    file: File,
    metadata?: {
      title?: string;
      category?: string;
      academicYear?: string;
      semester?: string;
      branch?: string;
      programme?: string;
      batch?: string;
      issuingAuthority?: string;
    }
  ) {
    const formData = new FormData();
    formData.append('file', file);
    if (metadata?.title) formData.append('title', metadata.title);
    if (metadata?.category) formData.append('category', metadata.category);
    if (metadata?.academicYear) formData.append('academic_year', metadata.academicYear);
    if (metadata?.semester) formData.append('semester', metadata.semester);
    if (metadata?.branch) formData.append('branch', metadata.branch);
    if (metadata?.programme) formData.append('programme', metadata.programme);
    if (metadata?.batch) formData.append('batch', metadata.batch);
    if (metadata?.issuingAuthority) formData.append('issuing_authority', metadata.issuingAuthority);
    return this.request<any>('/documents/upload', {
      method: 'POST',
      body: formData,
    });
  }

  public async listDocuments(filters?: {
    statusFilter?: string;
    categoryFilter?: string;
    academicYear?: string;
    batch?: string;
    programme?: string;
    semester?: string;
    branch?: string;
  } | string, legacyCategory?: string) {
    const params = new URLSearchParams();
    if (typeof filters === 'string') {
      if (filters) params.append('status_filter', filters);
      if (legacyCategory && legacyCategory !== 'ALL') params.append('category_filter', legacyCategory);
    } else if (filters) {
      if (filters.statusFilter) params.append('status_filter', filters.statusFilter);
      if (filters.categoryFilter && filters.categoryFilter !== 'ALL') params.append('category_filter', filters.categoryFilter);
      if (filters.academicYear) params.append('academic_year', filters.academicYear);
      if (filters.batch) params.append('batch', filters.batch);
      if (filters.programme) params.append('programme', filters.programme);
      if (filters.semester) params.append('semester', filters.semester);
      if (filters.branch) params.append('branch', filters.branch);
    }
    return this.request<any[]>(`/documents/?${params.toString()}`);
  }

  public async getDocumentReview(id: string) {
    return this.request<any>(`/documents/${id}`);
  }

  public async getMarksReconciliation(id: string) {
    return this.request<any>(`/documents/${id}/reconcile-marks`);
  }

  public async updateDocumentMetadata(id: string, metadata: any) {
    return this.request<any>(`/documents/${id}/metadata`, {
      method: 'PUT',
      body: JSON.stringify(metadata),
    });
  }

  public async publishDocument(id: string, payload: { isAuthoritative: boolean; audiences?: any[]; changeSummary?: string }) {
    return this.request<any>(`/documents/${id}/publish`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  public async archiveDocument(id: string) {
    return this.request<any>(`/documents/${id}/archive`, {
      method: 'POST',
    });
  }

  public getDocumentDownloadUrl(id: string): string {
    return `${API_BASE_URL}/documents/${id}/download`;
  }

  // Academic Records
  public async getTimetables(day?: string, branch?: string, semester?: string) {
    const params = new URLSearchParams();
    if (day) params.append('day', day);
    if (branch) params.append('branch', branch);
    if (semester) params.append('semester', semester);
    return this.request<any[]>(`/academic/timetables?${params.toString()}`);
  }

  public async getDatesheets(semester?: string, branch?: string) {
    const params = new URLSearchParams();
    if (semester) params.append('semester', semester);
    if (branch) params.append('branch', branch);
    return this.request<any[]>(`/academic/datesheets?${params.toString()}`);
  }

  public async getCalendars(yearGroup?: string) {
    const params = new URLSearchParams();
    if (yearGroup) params.append('year_group', yearGroup);
    return this.request<any[]>(`/academic/calendars?${params.toString()}`);
  }

  // Results & Marks
  public async getMyResults() {
    return this.request<any[]>('/results/my-results');
  }

  public async getAllResultsAdmin(rollNumber?: string, semester?: string) {
    const params = new URLSearchParams();
    if (rollNumber) params.append('roll_number', rollNumber);
    if (semester) params.append('semester', semester);
    return this.request<any[]>(`/results/?${params.toString()}`);
  }

  public async importResults(file: File, examinationSession: string = 'June 2026') {
    const formData = new FormData();
    formData.append('file', file);
    return this.request<any>(`/results/import?examination_session=${encodeURIComponent(examinationSession)}`, {
      method: 'POST',
      body: formData,
    });
  }

  // Admin & Audit
  public async getAdminStats() {
    return this.request<any>('/admin/stats');
  }

  public async getSystemHealth() {
    return this.request<any>('/admin/health');
  }

  public async getTemplates() {
    return this.request<any[]>('/admin/templates');
  }

  public async getAuditLogs(limit: number = 50, action?: string) {
    const params = new URLSearchParams();
    params.append('limit', limit.toString());
    if (action) params.append('action', action);
    return this.request<any[]>(`/audit/logs?${params.toString()}`);
  }

  // Communication & Notifications
  public async getChats() {
    return this.request<any[]>('/comm/chats');
  }

  public async createChat(title: string = 'New Conversation', kind: string = 'general') {
    return this.request<any>(`/comm/chats?title=${encodeURIComponent(title)}&kind=${encodeURIComponent(kind)}`, {
      method: 'POST',
    });
  }

  public async getChatMessages(chatId: string) {
    return this.request<any[]>(`/comm/chats/${chatId}/messages`);
  }

  public async sendChatMessage(chatId: string, content: string) {
    return this.request<any>(`/comm/chats/${chatId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  }

  public async setMessageFeedback(messageId: string, rating: number, comment?: string) {
    return this.request<any>(`/comm/messages/${messageId}/feedback`, {
      method: 'POST',
      body: JSON.stringify({ rating, comment }),
    });
  }

  public async getNotifications() {
    return this.request<any[]>('/comm/notifications');
  }

  public async markNotificationRead(id: string) {
    return this.request<any>(`/comm/notifications/${id}/read`, {
      method: 'PUT',
    });
  }

  public async markAllNotificationsRead() {
    return this.request<any>('/comm/notifications/read-all', {
      method: 'PUT',
    });
  }

  // AI Chat & Conversations (Module 2)
  public async getConversations() {
    return this.request<any[]>('/chat/conversations');
  }

  public async createConversation(title: string = 'New Conversation', kind: string = 'general') {
    return this.request<any>('/chat/conversations', {
      method: 'POST',
      body: JSON.stringify({ title, kind }),
    });
  }

  public async getConversation(id: string) {
    return this.request<any>(`/chat/conversations/${id}`);
  }

  public async deleteConversation(id: string) {
    return this.request<any>(`/chat/conversations/${id}`, {
      method: 'DELETE',
    });
  }

  public async renameConversation(id: string, title: string) {
    return this.request<any>(`/chat/conversations/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ title }),
    });
  }

  public streamChatMessage(
    conversationId: string,
    query: string,
    callbacks: {
      onCitations?: (citations: any[]) => void;
      onWidget?: (widget: any) => void;
      onDelta?: (token: string) => void;
      onDone?: (info: any) => void;
      onError?: (err: any) => void;
    }
  ): () => void {
    const token = this.getToken();
    const url = `${API_BASE_URL}/chat/conversations/${conversationId}/stream?query=${encodeURIComponent(query)}`;
    const controller = new AbortController();

    fetch(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`SSE connection failed HTTP ${response.status}`);
        }
        const reader = response.body?.getReader();
        if (!reader) return;
        const decoder = new TextDecoder();
        let buffer = '';

        let doneReceived = false;
        let hasReceivedContent = false;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const parts = buffer.split('\n\n');
          buffer = parts.pop() || '';

          for (const part of parts) {
            const lines = part.split('\n');
            let event = 'message';
            let dataStr = '';
            for (const line of lines) {
              if (line.startsWith('event: ')) event = line.slice(7).trim();
              else if (line.startsWith('data: ')) dataStr = line.slice(6).trim();
            }
            if (!dataStr) continue;
            try {
              const data = JSON.parse(dataStr);
              if (event === 'citations') callbacks.onCitations?.(data);
              else if (event === 'widget') callbacks.onWidget?.(data);
              else if (event === 'delta') {
                hasReceivedContent = true;
                callbacks.onDelta?.(data.text);
              }
              else if (event === 'done') {
                doneReceived = true;
                callbacks.onDone?.(data);
              }
              else if (event === 'error') {
                throw new Error(data.error || 'Server error during streaming');
              }
            } catch (parseErr) {
              if (event === 'error') throw parseErr;
            }
          }
        }

        if (!doneReceived && !hasReceivedContent) {
          throw new Error('SSE stream terminated prematurely before receiving completion or content.');
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          callbacks.onError?.(err);
        }
      });

    return () => controller.abort();
  }

  public async sendChatMessageV1(conversationId: string, content: string) {
    return this.request<any>(`/chat/conversations/${conversationId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  }

  public async submitMessageFeedbackV1(messageId: string, rating: number, comment?: string) {
    return this.request<any>(`/chat/messages/${messageId}/feedback`, {
      method: 'POST',
      body: JSON.stringify({ rating, comment }),
    });
  }

  // Conversational Application Agent (Module 2)
  public async applicationAgentChat(payload: { message: string; conversationHistory?: any[]; currentSlots?: any }) {
    return this.request<any>('/applications/agent-chat', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  public getApplicationDocxUrl(appId: string) {
    return `${API_BASE_URL}/applications/${appId}/docx`;
  }

  // Super Admin AI & Knowledge (Module 2)
  public async getAiStatus() {
    return this.request<any>('/admin/ai-status');
  }

  public async indexDocumentForRag(docId: string) {
    return this.request<any>(`/admin/documents/${docId}/index`, {
      method: 'POST',
    });
  }

  public async testRagDiagnostics(query: string) {
    return this.request<any>('/admin/diagnostics/rag-test', {
      method: 'POST',
      body: JSON.stringify({ query }),
    });
  }

  // Google OAuth (Module 2 & 2.5)
  public async getOAuthStatus() {
    return this.request<any>('/auth/oauth-status');
  }

  public async getGoogleOAuthUrl(role: string = 'STUDENT') {
    return this.request<any>(`/auth/google/url?role=${encodeURIComponent(role)}`);
  }

  public async googleOAuthCallback(code: string, state: string) {
    const data = await this.request<any>('/auth/google/callback', {
      method: 'POST',
      body: JSON.stringify({ code, state }),
    });
    if (data.access_token) {
      this.setToken(data.access_token);
    }
    return data;
  }

  public async switchAdminContext(targetContext: string) {
    const data = await this.request<any>('/auth/context-switch', {
      method: 'POST',
      body: JSON.stringify({ target_context: targetContext }),
    });
    if (data.access_token) {
      this.setToken(data.access_token);
    }
    return data;
  }

  // Master Roster & Excel Management (Module 2.5)
  public async previewRoster(file: File, entityType: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('entity_type', entityType);
    return this.request<any>('/admin/roster/preview', {
      method: 'POST',
      body: formData,
    });
  }

  public async importRoster(file: File, entityType: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('entity_type', entityType);
    return this.request<any>('/admin/roster/import', {
      method: 'POST',
      body: formData,
    });
  }

  public getRosterExportUrl(entityType: string): string {
    return `${API_BASE_URL}/admin/roster/export/${encodeURIComponent(entityType)}`;
  }

  public async getRosterSyncStatus() {
    return this.request<any>('/admin/roster/sync-status');
  }

  public async updateInstitutionalFields(userId: string, fields: any) {
    return this.request<any>(`/admin/roster/users/${userId}/institutional-fields`, {
      method: 'PUT',
      body: JSON.stringify(fields),
    });
  }

  public async toggleAccountStatus(userId: string, isActive: boolean) {
    return this.request<any>(`/admin/roster/users/${userId}/status`, {
      method: 'POST',
      body: JSON.stringify({ is_active: isActive }),
    });
  }

  // Faculty Profile Self-Management (Module 2.5)
  public async getFacultyProfileMe() {
    return this.request<any>('/faculty/me');
  }

  public async updateFacultyProfileMe(profileData: any) {
    return this.request<any>('/faculty/me', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  // Website Ingestion & Institutional Portals (Module 2.5 Addendum)
  public async getWebsiteSources() {
    return this.request<any>('/website/sources');
  }

  public async addWebsiteSource(sourceData: any) {
    return this.request<any>('/website/sources', {
      method: 'POST',
      body: JSON.stringify(sourceData),
    });
  }

  public async triggerWebsiteCrawl(maxPages: number = 10, sourceId?: string) {
    return this.request<any>('/website/crawl', {
      method: 'POST',
      body: JSON.stringify({ max_pages: maxPages, source_id: sourceId }),
    });
  }

  public async getInstitutionalPortals(category?: string) {
    const query = category ? `?category=${encodeURIComponent(category)}` : '';
    return this.request<any>(`/website/portals${query}`);
  }

  public async getWebsiteCrawlerStats() {
    return this.request<any>('/website/stats');
  }

  // Super Admin Canonical Profile Management (Requirement 3)
  public async adminUpdateStudentProfile(studentId: string, updates: any) {
    return this.request<any>(`/admin/students/${studentId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  public async adminUpdateFacultyProfile(facultyId: string, updates: any) {
    return this.request<any>(`/admin/faculty/${facultyId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }
}

export const apiClient = new ApiClient();
