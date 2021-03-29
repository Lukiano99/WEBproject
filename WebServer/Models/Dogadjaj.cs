using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations; 

namespace WebServer.Models {
    [Table("Dogadjaj")]
    public class Dogadjaj {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Ime")]
        [MaxLength(255)]
        public string Ime_dogadjaja { get; set; }

        [Column("Opis")]
        [MaxLength(255)]
        public string Opis_dogadjaja { get; set; }

        [Column("Mesec")]
        public int Mesec { get; set; }

        [Column("Dan")]
        public int Dan { get; set; }

        [Column("Prioritet")]
        public int Prioritet { get; set; }

    }
}