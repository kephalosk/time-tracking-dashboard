export async function fetchData() {
    let fetchedData;

    await fetch('./src/globals/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            fetchedData = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    return fetchedData;
}

export async function fetchInfoCard() {
    let infoCard;

    await fetch('./src/components/InfoCard/InfoCard.html')
        .then(response => response.text())
        .then(data => {
            infoCard = data;
        })
        .catch(error => console.error('Error while fetching InfoCard component:', error));

    return infoCard;
}

export async function fetchProfileCard() {
    let profileCard;

    await fetch('./src/components/ProfileCard/ProfileCard.html')
        .then(response => response.text())
        .then(data => {
            profileCard = data;
        })
        .catch(error => console.error('Error while fetching ProfileCard component:', error));

    return profileCard;
}
