using Microsoft.EntityFrameworkCore;

namespace WebServer.Models
{
    public class NotesContext : DbContext{

        public DbSet<Notes> Notes {get; set;}
        public DbSet<Beleska> Beleska { get; set; }
        public DbSet<Dogadjaj> Dogadjaj { get; set; }
        
        public NotesContext(DbContextOptions options) : base(options)
        {

        }
    }
}