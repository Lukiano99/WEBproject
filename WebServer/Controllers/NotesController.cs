using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using WebServer.Models;
using Microsoft.EntityFrameworkCore;

namespace WebServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesController : ControllerBase
    {
        public NotesContext Context { get; set; }
        public NotesController(NotesContext context)
        {
            Context = context;
        }

        [Route("PreuzmiNotese")]
        [HttpGet]
        public async Task<List<Notes>> PreuzmiNotese() {
            return await Context.Notes.Include(b => b.Beleske).ToListAsync();
        }

        [Route("UpisiNotes")]
        [HttpPost]
        public async Task UpisiNotes([FromBody] Notes notes) {
            Context.Notes.Add(notes);
            await Context.SaveChangesAsync();
        }

        [Route("AzurirajNotes")]
        [HttpPut]
        public async Task AzurirajNotes([FromBody] Notes notes) {
            Context.Update<Notes>(notes);
            await Context.SaveChangesAsync();
        }

        [Route("ObrisiNotes")]
        [HttpDelete]
        public async Task ObrisiNotes(int id) {
            var n = await Context.Notes.FindAsync(id);
            Context.Remove(n);
            await Context.SaveChangesAsync();
        }

        


    }
}
