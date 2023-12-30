let progressBar: HTMLElement | null;

function initializeProgressBar(): void {
  progressBar = document.querySelector('#progress-bar');
  if (progressBar !== null) {
    progressBar.style.width = '0%';
  }
}

function updateProgressBar(
  currentIndex: number,
  totalQuestions: number,
  targetQuestions: number,
): void {
  if (progressBar !== null) {
    const progressPercentage = Math.min((currentIndex / targetQuestions) * 100, 100);
    progressBar.style.width = `${progressPercentage}%`;
  }
}

export { initializeProgressBar, updateProgressBar };
