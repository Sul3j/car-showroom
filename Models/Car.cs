using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CarShowroom.Models
{
    public class Car
    {
        [Key]
        public int CarId { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Mark { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Model { get; set; }

        [Column(TypeName = "nvarchar(4)")]
        public string ProductionDate { get; set; }

        [Column(TypeName = "nvarchar(17)")]
        public string VIN { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string CarRegistration { get; set; }

        [Column(TypeName = "nvarchar(4)")]
        public string CarPower { get; set; }
    }
}
