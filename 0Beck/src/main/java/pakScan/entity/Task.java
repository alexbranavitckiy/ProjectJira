package pakScan.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "task")
public class Task<T> {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "code")
    private String code;

    @Column(name = "description")
    private String description;

    @Column(name = "due")
    @Temporal(TemporalType.DATE)
    private Date due;

    @Column(name = "estimation")
    private Integer estimation;

    @Column(name = "assigne")
    private Integer assigne;


    @Column(name = "creat")
    @Temporal(TemporalType.DATE)
    private Date creat;

    @Column(name = "updat")
    @Temporal(TemporalType.DATE)
    private Date updat;

    @Column(name = "clos")
    @Temporal(TemporalType.DATE)
    private Date clos;

    @Column(name = "priority_task")
    private Integer priority_task;

    @Column(name = "project_task")
    private Integer project_task;


    @Column(name = "stories")
    private String stories;

    @Column(name = "status_task")
    private Integer status_task;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDue() {
        return due;
    }

    public void setDue(Date due) {
        this.due = due;
    }

    public Integer getEstimation() {
        return estimation;
    }

    public void setEstimation(Integer estimation) {
        this.estimation = estimation;
    }

    public Integer getAssigne() {
        return assigne;
    }

    public void setAssigne(Integer assigne) {
        this.assigne = assigne;
    }

    public Date getCreat() {
        return creat;
    }

    public void setCreat(Date creat) {
        this.creat = creat;
    }

    public Date getUpdat() {
        return updat;
    }

    public void setUpdat(Date updat) {
        this.updat = updat;
    }

    public Date getClos() {
        return clos;
    }

    public void setClos(Date clos) {
        this.clos = clos;
    }

    public Integer getPriority_task() {
        return priority_task;
    }

    public void setPriority_task(Integer priority_task) {
        this.priority_task = priority_task;
    }

    public Integer getProject_task() {
        return project_task;
    }

    public void setProject_task(Integer project_task) {
        this.project_task = project_task;
    }


    public String getStories() {
        return stories;
    }

    public void setStories(String stories) {
        this.stories = stories;
    }

    public Integer getStatus_task() {
        return status_task;
    }

    public void setStatus_task(Integer status_task) {
        this.status_task = status_task;
    }


    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", due=" + due +
                ", estimation=" + estimation +
                ", assigne=" + assigne +
                ", creat=" + creat +
                ", updat=" + updat +
                ", clos=" + clos +
                ", priority_task=" + priority_task +
                ", project_task=" + project_task +
                ", stories='" + stories + '\'' +
                ", status_task=" + status_task +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Task)) return false;
        Task task = (Task) o;
        return Objects.equals(getId(), task.getId()) &&
                Objects.equals(getDescription(), task.getDescription()) &&
                Objects.equals(getDue(), task.getDue()) &&
                Objects.equals(getEstimation(), task.getEstimation()) &&
                Objects.equals(getAssigne(), task.getAssigne()) &&
                Objects.equals(getCreat(), task.getCreat()) &&
                Objects.equals(getUpdat(), task.getUpdat()) &&
                Objects.equals(getClos(), task.getClos()) &&
                Objects.equals(getPriority_task(), task.getPriority_task()) &&
                Objects.equals(getProject_task(), task.getProject_task()) &&
                Objects.equals(getStories(), task.getStories()) &&
                Objects.equals(getStatus_task(), task.getStatus_task());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getDescription(), getDue(), getEstimation(), getAssigne(), getCreat(), getUpdat(), getClos(), getPriority_task(), getProject_task(), getStories(), getStatus_task());
    }
}
