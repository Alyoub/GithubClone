import React, { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";

/*
  This component:
   1) fetches contributions from the public github-contributions-api
      (no auth needed). Endpoint: https://github-contributions-api.jogruber.de/v4/:username
   2) passes payload.contributions to react-activity-calendar (the expected shape).
*/

export function GithubHeatmap({ username = "alyoub" }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setErr(null);

    const url = `https://github-contributions-api.jogruber.de/v4/${username}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Network response ${res.status}`);
        return res.json();
      })
      .then((payload) => {
        // payload.contributions is typically an array of { date, count, level }
        if (!payload || !payload.contributions) {
          throw new Error("No contributions returned");
        }
        setData(payload.contributions);
      })
      .catch((e) => {
        console.error("Failed to load contributions:", e);
        setErr(e.message || "Failed to fetch");
      })
      .finally(() => setLoading(false));
  }, [username]);

  return (
    <div className="p-4 max-w-full">
      <h3 className="mb-3 text-sm font-semibold">GitHub contributions — {username}</h3>

      {loading && <div className="text-xs text-neutral-400">Loading...</div>}
      {err && <div className="text-xs text-red-400">Error: {err}</div>}

      {data && (
        <div className="overflow-auto bg-[#0D1117]">
          <ActivityCalendar
            data={data}
            blockSize={12}
            blockMargin={4}
            showWeekdayLabels={false}
            theme={{
              dark: [
                '#161B22', // level 0 — dark background
                '#0e4429', // level 1 — low activity
                '#006d32', // level 2 — medium
                '#26a641', // level 3 — high
                '#39d353', // level 4 — very high
              ]
            }}
          />

        </div>
      )}
    </div>
  );
}
