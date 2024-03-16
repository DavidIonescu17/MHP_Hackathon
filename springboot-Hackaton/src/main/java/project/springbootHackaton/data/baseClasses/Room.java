package project.springbootHackaton.data.baseClasses;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.Set;

@Getter
@Setter
@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String roomName;

    @OneToMany(mappedBy = "room")
    private Set<Desk> desks;

    @ManyToOne
    @JoinColumn(name = "floor_id") // Assuming the column name in the Room table that references Floor table is floor_id
    private Floor floor;
}
