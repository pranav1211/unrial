import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

class Event {
    private String name;
    private String date;
    private String time;
    private int capacity;
    private List<String> attendees;

    public Event(String name, String date, String time, int capacity) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.capacity = capacity;
        this.attendees = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public String getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public int getCapacity() {
        return capacity;
    }

    public List<String> getAttendees() {
        return attendees;
    }

    public boolean addAttendee(String attendee) {
        if (attendees.size() < capacity) {
            attendees.add(attendee);
            return true;
        }
        return false;
    }

    @Override
    public String toString() {
        return "Event{" +
                "name='" + name + '\'' +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", capacity=" + capacity +
                ", attendees=" + attendees.size() +
                '}';
    }
}

class EventManager {
    private List<Event> events;

    public EventManager() {
        this.events = new ArrayList<>();
    }

    public void createEvent(String name, String date, String time, int capacity) {
        events.add(new Event(name, date, time, capacity));
    }

    public List<Event> listEvents() {
        return events;
    }

    public Event getEvent(String name) {
        for (Event event : events) {
            if (event.getName().equalsIgnoreCase(name)) {
                return event;
            }
        }
        return null;
    }
}

public class MainGUI extends JFrame {
    private EventManager eventManager;
    private JTextArea textArea;
    private static final String EVENT_CREATION_PASSWORD = "javaaat";
    private static final String VIEW_ATTENDEES_PASSWORD = "javaaat";

    public MainGUI() {
        eventManager = new EventManager();
        setTitle("Event Manager");
        setSize(500, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(5, 1));

        JButton createButton = new JButton("Create Event");
        JButton listButton = new JButton("List Events");
        JButton registerButton = new JButton("Register for Event");
        JButton viewAttendeesButton = new JButton("View Attendees");
        JButton exitButton = new JButton("Exit");

        panel.add(createButton);
        panel.add(listButton);
        panel.add(registerButton);
        panel.add(viewAttendeesButton);
        panel.add(exitButton);

        textArea = new JTextArea();
        textArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(textArea);

        add(panel, BorderLayout.NORTH);
        add(scrollPane, BorderLayout.CENTER);

        createButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                createEvent();
            }
        });

        listButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                listEvents();
            }
        });

        registerButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                registerForEvent();
            }
        });

        viewAttendeesButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                viewAttendees();
            }
        });

        exitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });
    }

    private void createEvent() {
        String password = JOptionPane.showInputDialog(this, "Enter password to create event:");
        if (!EVENT_CREATION_PASSWORD.equals(password)) {
            JOptionPane.showMessageDialog(this, "Invalid password! Access denied.");
            return;
        }

        String name = JOptionPane.showInputDialog(this, "Enter event name:");
        String date = JOptionPane.showInputDialog(this, "Enter event date (YYYY-MM-DD):");
        String time = JOptionPane.showInputDialog(this, "Enter event time (HH:MM):");
        int capacity = Integer.parseInt(JOptionPane.showInputDialog(this, "Enter event capacity:"));
        
        eventManager.createEvent(name, date, time, capacity);
        JOptionPane.showMessageDialog(this, "Event created successfully!");
    }

    private void listEvents() {
        textArea.setText(""); // Clear previous text
        StringBuilder eventList = new StringBuilder();
        for (Event event : eventManager.listEvents()) {
            eventList.append(event.toString()).append("\n");
        }
        textArea.setText(eventList.toString());
    }

    private void registerForEvent() {
        String eventName = JOptionPane.showInputDialog(this, "Enter event name to register:");
        Event event = eventManager.getEvent(eventName);
        
        if (event != null) {
            String attendeeName = JOptionPane.showInputDialog(this, "Enter your name:");
            if (event.addAttendee(attendeeName)) {
                JOptionPane.showMessageDialog(this, "Successfully registered!");
            } else {
                JOptionPane.showMessageDialog(this, "Event is full!");
            }
        } else {
            JOptionPane.showMessageDialog(this, "Event not found!");
        }
    }

    private void viewAttendees() {
        String password = JOptionPane.showInputDialog(this, "Enter password to view attendees:");
        if (!VIEW_ATTENDEES_PASSWORD.equals(password)) {
            JOptionPane.showMessageDialog(this, "Invalid password! Access denied.");
            return;
        }

        String eventName = JOptionPane.showInputDialog(this, "Enter event name to view attendees:");
        Event event = eventManager.getEvent(eventName);
        
        if (event != null) {
            StringBuilder attendeeList = new StringBuilder();
            for (String attendee : event.getAttendees()) {
                attendeeList.append(attendee).append("\n");
            }
            JOptionPane.showMessageDialog(this, "Attendees:\n" + attendeeList.toString());
        } else {
            JOptionPane.showMessageDialog(this, "Event not found!");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new MainGUI().setVisible(true);
            }
        });
    }
}
