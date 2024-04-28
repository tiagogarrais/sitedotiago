export default function Contador({ visitCount }) {
  return (
    <div className="contador">
      {visitCount !== null && visitCount > 0 && (
        <p>Total de buscas: {visitCount}</p>
      )}
    </div>
  );
}
