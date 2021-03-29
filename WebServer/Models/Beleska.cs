using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations; 
using System.Text.Json.Serialization;

namespace WebServer.Models {
    [Table("Beleska")]
    public class Beleska {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Dogadjaj")]
        public Dogadjaj Dogadjaj { get; set; }

        [JsonIgnore]
        public Notes Notes { get; set; }
    }
}