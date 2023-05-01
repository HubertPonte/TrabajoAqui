module.exports = function () {
  var data = {
    authors: [
      {
        id:1,
        Titulo: "titulo 1",
        Descripcion:"Descripcion 1",
        Fecha_Publicacion: "17-09-2021",
        Fecha_Desaparicion:"10-09-2021",
        Vigente:"NO",
      },
      {
        id:2,
        Titulo: "titulo 2",
        Descripcion:"Descripcion 2",
        Fecha_Publicacion: "19-02-2023",
        Fecha_Desaparicion:"12-02-2023",
        Vigente:"NO",

      },
      {
        id:3,
        Titulo: "titulo 3",
        Descripcion:"Descripcion 3",
        Fecha_Publicacion: "07-11-2021",
        Fecha_Desaparicion:"02-11-2021",
        Vigente:"SI",

      },
      {
        id:4,
        Titulo: "titulo 4",
        Descripcion:"Descripcion 4",
        Fecha_Publicacion: "14-06-2022",
        Fecha_Desaparicion:"09-06-2022",
        Vigente:"NO",

      },
      {
        id:5,
        Titulo: "titulo 5",
        Descripcion:"Descripcion 5",
        Fecha_Publicacion: "20-03-2023",
        Fecha_Desaparicion:"09-03-2023",
        Vigente:"SI",

    	},
      {
        id:6,
        Titulo: "titulo 6",
        Descripcion:"Descripcion 6",
        Fecha_Publicacion: "19-02-2023",
        Fecha_Desaparicion:"10-02-2023",
        Vigente:"SI",

    	},
      {
        id:7,
        Titulo: "titulo 7",
        Descripcion:"Descripcion 7",
        Fecha_Publicacion: "15-02-2023",
        Fecha_Desaparicion:"08-02-2023",
        Vigente:"SI",

    	},
    ],
    books:[
      {
        id: 1,
        nameBook: "Las leyes",
        nHojas: "145",
        Fecha_Publicacion: "17-09-2021",
        Fecha_Desaparicion: "10-09-2021",
        author:
        {
          id:1,
          Titulo: "titulo 1",
          Descripcion:"Descripcion 1",
          Fecha_Publicacion: "17-09-2021",
          Fecha_Desaparicion:"10-09-2021",
          Vigente:"NO",
        }
      },
    ]

  }
  return data
}
