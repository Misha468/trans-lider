import Arrow from "../../../../assets/static/arrow.svg";
export default function Description() {
  return (
    <section className="description-wrapper">
      <div className="graphic-block">
        <div className="graphic-block-image-wrapper">
          <img src={Arrow} alt="Стрелочка" className="graphic-block-image" />
        </div>
        <div className="graphic-block-lines">
          <div className="flex flex-row gap-5">
            <p className="graphic-block-lines-element">Гибкость</p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <p className="graphic-block-lines-element">Приятная цена</p>
            <p className="uppercase large-title">И мы продолжаем расти!</p>
          </div>
          <div className="flex flex-row gap-5">
            <p className="graphic-block-lines-element">
              Широкий спектр решаемых задач
            </p>
          </div>
        </div>
      </div>
      <p className="mega-title uppercase">
        Выбирайте надёжного партнера звоните прямо сейчас в "ТРАНС-ЛИДЕР" и
        начнем работу!
      </p>
    </section>
  );
}
