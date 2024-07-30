function ListsComponent() {
  return (
    <div>
      <ul>
        <li>
          Элемент 1
          <ul>
            <li>Вложенный элемент 1.1</li>
            <li>Вложенный элемент 1.2</li>
          </ul>
        </li>
        <li>Элемент 2</li>
        <li>Элемент 3</li>
      </ul>
      <ol>
        <li>
          Элемент A
          <ol>
            <li>Вложенный элемент A.1</li>
            <li>Вложенный элемент A.2</li>
          </ol>
        </li>
        <li>Элемент B</li>
        <li>Элемент C</li>
      </ol>
    </div>
  );
}

export default ListsComponent;
