interface RowProps {
  id: number;
  text: string;
}

function Row({ id, text }: RowProps) {
  return (
    <tr>
      <td>{id}</td>
      <td>{text}</td>
    </tr>
  );
}

export default Row;
