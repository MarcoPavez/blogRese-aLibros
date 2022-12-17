package blogbackend.blogbackend.model;

import javax.persistence.*;

@Entity(name="images")
public class Images {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String urlImagen;
    private String titulo;
   
    public Images() {
    }

    public Images(int id, String urlImagen, String titulo) {
        this.id = id;
        this.urlImagen = urlImagen;
        this.titulo = titulo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    
}
