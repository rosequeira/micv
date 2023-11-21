import "./ListSkills.scss";

function ListSkills({ data, titulo }) {
  return (
    <div className="list-skill">
      <div className="ti-list">{titulo}</div>
      <div className="list-datas">
        {data?.map((item, index) => (
          <div key={index} className="list">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export { ListSkills };
