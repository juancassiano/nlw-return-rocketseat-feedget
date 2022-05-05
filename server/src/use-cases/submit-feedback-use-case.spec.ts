import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//spies = espiões (verificam se uma função foi chamada)
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackMocked = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should type empty return a error", () => {
    expect(
      submitFeedbackMocked.execute({
        type: "",
        comment: "Exemple comment",
        screenshot: "data:image/png;base64,656516516",
      })
    ).rejects.toThrow();
  });
  it("should comment empty return a error", () => {
    expect(
      submitFeedbackMocked.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,656516516",
      })
    ).rejects.toThrow();
  });
  it("should return a error if image start incorrect", () => {
    expect(
      submitFeedbackMocked.execute({
        type: "BUG",
        comment: "comment",
        screenshot: "data:asdlkans",
      })
    ).rejects.toThrow();
  });
  it("should be able to submit feedback", () => {
    expect(
      submitFeedbackMocked.execute({
        type: "BUG",
        comment: "Exemple comment",
        screenshot: "data:image/png;base64,656516516",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });
});
