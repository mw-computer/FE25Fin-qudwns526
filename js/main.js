document.addEventListener("DOMContentLoaded", function () {
    // 슬라이더 관련 요소들
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");
    let currentIndex = 0;
    const totalSlides = slides.length;

    // 슬라이드 이동 함수
    function moveToSlide(index) {
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    // 이전 슬라이드
    prevBtn?.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        moveToSlide(currentIndex);
    });

    // 다음 슬라이드
    nextBtn?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        moveToSlide(currentIndex);
    });

    // 자동 슬라이드
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        moveToSlide(currentIndex);
    }, 5000); // 5초마다 자동 전환
});
