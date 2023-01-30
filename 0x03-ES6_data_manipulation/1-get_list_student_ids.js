export default function getListStudentIds(arrayId) {
    if (Array.isArray(arrayId)) {
        return arrayId.map((obj) => obj.id);
    }
    return [];
}