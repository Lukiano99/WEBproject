using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Dogadjaj",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Opis = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Mesec = table.Column<int>(type: "int", nullable: false),
                    Dan = table.Column<int>(type: "int", nullable: false),
                    Prioritet = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dogadjaj", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Red = table.Column<int>(type: "int", nullable: false),
                    Kolona = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Beleska",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DogadjajID = table.Column<int>(type: "int", nullable: true),
                    NotesID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Beleska", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Beleska_Dogadjaj_DogadjajID",
                        column: x => x.DogadjajID,
                        principalTable: "Dogadjaj",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Beleska_Notes_NotesID",
                        column: x => x.NotesID,
                        principalTable: "Notes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Beleska_DogadjajID",
                table: "Beleska",
                column: "DogadjajID");

            migrationBuilder.CreateIndex(
                name: "IX_Beleska_NotesID",
                table: "Beleska",
                column: "NotesID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Beleska");

            migrationBuilder.DropTable(
                name: "Dogadjaj");

            migrationBuilder.DropTable(
                name: "Notes");
        }
    }
}
