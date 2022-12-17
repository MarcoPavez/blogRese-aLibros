package blogbackend.blogbackend.model;

import javax.persistence.*;

@Entity(name="postcategories")
public class PostCategories {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String categoria;
    private String subcategoria;
    
    public PostCategories() {
    }

    public PostCategories(int id, String categoria, String subcategoria) {
        this.id = id;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getSubcategoria() {
        return subcategoria;
    }

    public void setSubcategoria(String subcategoria) {
        this.subcategoria = subcategoria;
    }

    
}
