export interface IQuiz {
    title: string;
    description: string;
    teacher_id: string;
}
export interface IUpdateQuiz {
    title?: string;
    description?: string;
}