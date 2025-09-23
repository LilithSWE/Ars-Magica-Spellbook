import { useState, useEffect } from "react";
import supabaseClient from "../services/supabaseClient";

export function Home() {
  const [spells, setSpells] = useState<any[]>([]);

  useEffect(() => {
    const fetchSpells = async () => {
      const { data, error } = await supabaseClient
        .from("Spellbook")
        .select("*");
      if (error) {
        console.error("Error fetching spells:", error);
      } else {
        setSpells(data);
      }
    };

    fetchSpells();
  }, []);

  return (
    <div>
      <h1>Ars Magica Spellbook</h1>

      <p>List of spells:</p>
      <ul>
        {spells.map((spell) => (
          <li key={spell.id}>
            {spell.name}: {spell.level} - {spell.technique} / {spell.form}
          </li>
        ))}
      </ul>
    </div>
  );
}
