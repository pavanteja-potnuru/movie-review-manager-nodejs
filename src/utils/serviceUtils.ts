export function generateReviewId(userName: string, movieName: string) {
    return `${userName}#${movieName}$`;
};