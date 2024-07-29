import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import EventList from "../../containers/Events";
import PeopleCard from "../../components/PeopleCard";
import EventCard from "../../components/EventCard";


describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
    render(<EventList />);
  })
  it("a list a people is displayed", () => {
    // to implement 
    render(
      <PeopleCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        name="test name"
        position="test position"
      />
    );
    expect(screen.getByAltText("image-alt-text")).toBeInTheDocument();
    expect(screen.getByText("test name")).toBeInTheDocument();
    expect(screen.getByText("test position")).toBeInTheDocument();
  })
  it("a footer is displayed", () => {
    // to implement
    render(<Home />);
    expect(screen.getByText("Notre dernière prestation")).toBeInTheDocument();
    expect(screen.getByText("Contactez-nous")).toBeInTheDocument();
    expect(screen.getByText("45 avenue de la République, 75000 Paris")).toBeInTheDocument();
  })
  
  it("an event card, with the last event, is displayed", () => {
    // to implement
    render(<EventCard 
      imageSrc="http://src-image" 
      imageAlt="image-alt-text" 
      date={new Date("2022-04-01")}
      title="test event"
      label="test label"
    />
  );
  })
});









