export default function ActivityTable({ activities }) {
  return (
    <section aria-labelledby="recent-activity-heading">
      <h2
        className="mb-md font-headline-md text-primary"
        id="recent-activity-heading"
      >
        Actividad reciente
      </h2>
      <div className="overflow-x-auto rounded-xl bg-surface-container-lowest">
        <table className="w-full min-w-[520px] text-left">
          <thead className="border-b border-outline-variant text-sm text-on-surface-variant">
            <tr>
              <th className="px-md py-sm font-bold" scope="col">Lesson</th>
              <th className="px-md py-sm font-bold" scope="col">Date</th>
              <th className="px-md py-sm font-bold" scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr className="border-b border-outline-variant last:border-b-0" key={activity.id}>
                <td className="px-md py-sm text-primary">{activity.lesson}</td>
                <td className="px-md py-sm text-on-surface-variant">{activity.date}</td>
                <td className="px-md py-sm font-bold text-secondary">{activity.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
