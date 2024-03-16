package project.springbootHackaton.data.baseClasses;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import project.springbootHackaton.data.baseClasses.Booking;
import project.springbootHackaton.data.baseClasses.Prediction;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

@Getter
@Setter
@Entity
public class OfficeEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long eventId;

    private String name;
    private String description;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private int expectedAttendance;


    @ManyToOne
    @JoinColumn(name = "prediction_id")
    private Prediction prediction;
}
