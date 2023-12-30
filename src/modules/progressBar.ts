let progressBar: HTMLElement | null;
const targetQuestionCount = 10;

function initializeProgressBar(): void {
  progressBar = document.querySelector('#progress-bar');
  if (progressBar !== null) {
    progressBar.style.width = '0%';
  }
}

function updateProgressBar(currentIndex: number): void {
  if (progressBar !== null) {
    const progressPercentage = Math.min(
      (currentIndex / targetQuestionCount) * 100,
      100
    );
    progressBar.style.width = `${progressPercentage}%`;
  }
}

export { initializeProgressBar, updateProgressBar };
