/**
 * Saved Students Service
 * Manages saved student profiles using persistent local state with event synchronization.
 * Zero backend modification, instant reactivity across Discover, Chat, and Modals.
 */

export const getSavedStudentIds = (userId: string = 'default'): string[] => {
  try {
    const raw = localStorage.getItem(`pocketuni_saved_students_${userId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveStudentId = (studentId: string, userId: string = 'default') => {
  const current = getSavedStudentIds(userId);
  if (!current.includes(studentId)) {
    const updated = [...current, studentId];
    localStorage.setItem(`pocketuni_saved_students_${userId}`, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('pocketuni_saved_students_updated', { detail: { studentId, saved: true } }));
  }
};

export const removeSavedStudentId = (studentId: string, userId: string = 'default') => {
  const current = getSavedStudentIds(userId);
  const updated = current.filter(id => id !== studentId);
  localStorage.setItem(`pocketuni_saved_students_${userId}`, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent('pocketuni_saved_students_updated', { detail: { studentId, saved: false } }));
};

export const toggleSaveStudentId = (studentId: string, userId: string = 'default'): boolean => {
  const current = getSavedStudentIds(userId);
  const exists = current.includes(studentId);
  if (exists) {
    removeSavedStudentId(studentId, userId);
    return false;
  } else {
    saveStudentId(studentId, userId);
    return true;
  }
};

export const isStudentSaved = (studentId: string, userId: string = 'default'): boolean => {
  return getSavedStudentIds(userId).includes(studentId);
};

