package blogbackend.blogbackend.model;

import java.util.Date;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Post {

    /* Atributos del post */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    @Column(length = 10000)
    private String cuerpo;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date fecha;

    /* Imagen del post */
    private String urlImagen;
    private String nombreImagen;

}
