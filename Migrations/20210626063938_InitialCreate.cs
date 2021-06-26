using Microsoft.EntityFrameworkCore.Migrations;

namespace CarShowroom.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    CarId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Mark = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    Model = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    ProductionDate = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    VIN = table.Column<string>(type: "nvarchar(17)", nullable: true),
                    CarRegistration = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    CarPower = table.Column<string>(type: "nvarchar(4)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.CarId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");
        }
    }
}
