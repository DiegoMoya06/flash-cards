export type RootStackPaamList = {
    "(tabs)": {
        screen: "index" | "deck" | "settings";
    };
    "Deck": { deckId: string };
    "+not-found": {};
};

export type TabParamList = {
    index: {};
    library: {};
    deck: { deckId: string }
}