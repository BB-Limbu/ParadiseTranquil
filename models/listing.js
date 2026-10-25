const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default :  "https://www.google.com/search?q=goa+beach+images&rlz=1C1VDKB_enIN1149IN1149&biw=1280&bih=631&sca_esv=ff0c51417b3d7670&sxsrf=APpeQnvZ0bX317mP43DIUAn3DTzYGgJCQQ%3A1792888364443&ei=LE7darPNGumrhvcP7cmxoQM&oq=goa+images&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmdvYSBpbWFnZXMqBggBGAcYHjIGEAAYBxgeMgYQABgHGB4yChAAGIAEGIoFGEMyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHki7PVCABFjgI3ABeAGQAQCYAawBoAGoEqoBBDAuMTewAQC4AQHIAQD4AQGYAhGgAokSwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPCAgsQABiABBiKBRiRAsICEBAAGIAEGIoFGEMYsQMYgwGYAwDiAwQYACBd4gMEGAAgXuIDBBgAIF_iAwQYACBg4gMEGAAgYeIDBBgAIGKIBgGQBgmSBwQxLjE2oAfFZLIHBDAuMTa4B4MSwgcEMi0xN8gHQ4AIAQ&sclient=gws-wiz-serp#sv=CAMSaRowKg5fTE5qdUFBeU5mQ3J5TTIOX0xOanVBQXlOZkNyeU06Dm5kVXJDWXhRbFgydThNIAQqLwobX04wN2RhcFR0SVBpZmh2Y1AxWXF3Z0FNXzY2Eg5fTE5qdUFBeU5mQ3J5TRgAMAFQBRgHIOO7wYgPSggQAhgBIAIoAQ",
    set: (v) =>
      v === ""
        ? "https://www.google.com/search?q=goa+beach+images&rlz=1C1VDKB_enIN1149IN1149&biw=1280&bih=631&sca_esv=ff0c51417b3d7670&sxsrf=APpeQnvZ0bX317mP43DIUAn3DTzYGgJCQQ%3A1792888364443&ei=LE7darPNGumrhvcP7cmxoQM&oq=goa+images&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmdvYSBpbWFnZXMqBggBGAcYHjIGEAAYBxgeMgYQABgHGB4yChAAGIAEGIoFGEMyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHki7PVCABFjgI3ABeAGQAQCYAawBoAGoEqoBBDAuMTewAQC4AQHIAQD4AQGYAhGgAokSwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPCAgsQABiABBiKBRiRAsICEBAAGIAEGIoFGEMYsQMYgwGYAwDiAwQYACBd4gMEGAAgXuIDBBgAIF_iAwQYACBg4gMEGAAgYeIDBBgAIGKIBgGQBgmSBwQxLjE2oAfFZLIHBDAuMTa4B4MSwgcEMi0xN8gHQ4AIAQ&sclient=gws-wiz-serp#sv=CAMSaRowKg5fTE5qdUFBeU5mQ3J5TTIOX0xOanVBQXlOZkNyeU06Dm5kVXJDWXhRbFgydThNIAQqLwobX04wN2RhcFR0SVBpZmh2Y1AxWXF3Z0FNXzY2Eg5fTE5qdUFBeU5mQ3J5TRgAMAFQBRgHIOO7wYgPSggQAhgBIAIoAQ"
        : v,
  },

  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
