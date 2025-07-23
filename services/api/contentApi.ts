import axios from "axios";

const ContentService = {
    getFlashcards: async () => {
        try {
            const response = await axios.get('https://opentdb.com/api.php?amount=10');
            // const data = response.data;
            console.log("DATAA",response.data)
            return response.data;
        } catch (error) {
            console.error('Failed to fetch flashcards: ',error);
            throw error;
        }
    }
}