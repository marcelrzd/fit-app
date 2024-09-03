'use client';


export default function MacroTable() {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Calories</th>
            <th>Liquid Carbs</th>
            <th>Carbs</th>
            <th>Protein</th>
            <th>Total Fat</th>
            <th>Saturated Fat</th>
            <th>Fibers</th>
            <th>Sodium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{macros.calories}</td>
            <td>{macros.liquidCarbs}</td>
            <td>{macros.carbs}</td>
            <td>{macros.protein}</td>
            <td>{macros.totalFat}</td>
            <td>{macros.saturatedFat}</td>
            <td>{macros.fibers}</td>
            <td>{macros.sodium}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
