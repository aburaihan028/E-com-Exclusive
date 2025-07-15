self.onmessage = (e) => {
  // Target date set
  const targetDate = e.data;
  const interval = setInterval(() => {
    const now = new Date();
    const difference = targetDate - now;
    //
    if (difference <= 0) {
      clearInterval(interval);
      // self.postMessage({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    self.postMessage({ days, hours, minutes, seconds });
  }, 1000);
};
