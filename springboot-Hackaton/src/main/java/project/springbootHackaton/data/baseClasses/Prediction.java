package project.springbootHackaton.data.baseClasses;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

@Getter
@Setter
@Entity
public class Prediction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long predictionId;

    private LocalDate date;
    private String timeSlot;
    private String predictedBusynessLevel;
    private String confidenceInterval;

    @OneToMany(mappedBy = "prediction")
    private Set<OfficeEvent> officeEvents;
}
