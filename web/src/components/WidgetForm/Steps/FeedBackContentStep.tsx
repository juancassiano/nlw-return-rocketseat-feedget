import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../../ScreenshotButton";

interface FeedBackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackSent: () => void;
  onFeedbackRestartRequested: () => void;
}

export function FeedBackContentStep({
  feedbackType,
  onFeedbackSent,
  onFeedbackRestartRequested,
}: FeedBackContentStepProps) {
  const feedbackInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    try {
      console.log({
        screenshot,
        comment,
      });
      onFeedbackSent();
    } catch (error) {}
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2 dark:text-zinc-100 text-zinc-800">
          <img
            src={feedbackInfo.image.source}
            alt={feedbackInfo.image.alt}
            className="w-6 h-6 "
          />
          {feedbackInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="
            min-w-[304px]
            w-full
            min-h-[112px]
            text-sm
            placeholder-zinc-400
            dark:text-zinc-100 text-zinc-800
            border-zinc-600
            bg-transparent
            rounded-md
            resize-none
            focus:border-brand-500
            focus:ring-brand-500
            focus:ring-1  
            focus:outline-none
            scrollbar-thumb-zinc-700
            scrollbar-track-transparent
            scrollbar-thin
            "
          placeholder="Conte com detalhes o que est?? acontecendo..."
        />
        <footer className="flex mt-2 justify-between gap-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={comment.trim().length === 0}
            className="
              p-2
              bg-brand-500
              rounded-md
              border-transparent
              flex-1
              flex
              justify-center
              items-center
              text-sm
              hover:bg-brand-300
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-zinc-900
              focus:ring-brand-500
              transition-colors
              disabled:opacity-50
              disabled:hover:bg-brand-500
              disabled:cursor-not-allowed
              
            "
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
