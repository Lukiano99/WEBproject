using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations; 
using System.Collections.Generic;

namespace WebServer.Models {
    [Table("Notes")]
    public class Notes {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Ime")]
        [MaxLength(255)]
        public string Ime_notesa { get; set; }

        [Column("Red")]
        public int Broj_redova { get; set; }

        [Column("Kolona")]
        public int Broj_kolona { get; set; }

        public virtual List<Beleska> Beleske { get; set; }
    }
}