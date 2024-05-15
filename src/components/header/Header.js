import "./style.css";

const header = () => {
  return (
    <div className="header_parent">
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Я <em>Максим,</em>
            </strong>
            <br />
            являюсь fronted junior разработчиком
          </h1>
          <div className="header__text">
            <p>моя цель учиться и создавать новое</p>
          </div>
        </div>
      </header>{" "}
    </div>
  );
};

export default header;
