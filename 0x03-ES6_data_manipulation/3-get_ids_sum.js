export default function getStudentIdsSum(list) {
    return list.reduce((currentTotal, obj) => obj.id + currentTotal, 0);
}