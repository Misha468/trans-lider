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
          <div className="flex flex-row gap-5">
            <p className="graphic-block-lines-element">
              Широкий спектр решаемых задач
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[100px] items-center">
        <p className="uppercase mega-title w-3/5">И мы продолжаем расти!</p>
        <p className="mega-title uppercase">
          Выбирайте надёжного партнера звоните прямо сейчас в "ТРАНС-ЛИДЕР" и
          начнем работу!
        </p>
      </div>
    </section>
  );
}
