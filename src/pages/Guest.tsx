import { useEffect, useState } from "react";
import supabaseClient from "../services/supabaseClient";
import type { Spell } from "../types/spell";

export const Guest = () => {
  const [spells, setSpells] = useState<Spell[]>([]);

  useEffect(() => {
    // TODO: consider moving to hooks.
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
    <section>
      <h1>Guest Page</h1>
      <p>Welcome, guest! Here are some spells you can explore:</p>
      <ul>
        {spells.map((spell) => (
          <li key={spell.id}>
            <h2>{spell.name}</h2>
            <p>{spell.effect}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
