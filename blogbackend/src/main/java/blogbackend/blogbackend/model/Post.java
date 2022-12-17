package blogbackend.blogbackend.model;

import java.util.Date;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import com.mysql.cj.jdbc.Blob;

@Entity(name="post")
public class Post {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String titulo;
    private Blob cuerpo;
    @DateTimeFormat(pattern ="yyyy-MM-dd")
    private Date fecha;
   
    public Post() {
    }

    public Post(int id, String titulo, Blob cuerpo, Date fecha) {
        this.id = id;
        this.titulo = titulo;
        this.cuerpo = cuerpo;
        this.fecha = fecha;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Blob getCuerpo() {
        return cuerpo;
    }

    public void setCuerpo(Blob cuerpo) {
        this.cuerpo = cuerpo;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    
}
