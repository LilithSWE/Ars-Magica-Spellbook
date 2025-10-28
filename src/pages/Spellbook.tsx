/*  const [spells, setSpells] = useState<Spell[]>([]);

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
 */
