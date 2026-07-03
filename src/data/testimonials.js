const testimonialsWithRatings = [
  { firstName: "John", lastName: "Smith", rating: 5, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", dateSubmitted: "2026-01-15" },
  { firstName: "Sarah", lastName: "Johnson", rating: 4, review: "Praesent vitae lectus nec urna interdum vulputate.", dateSubmitted: "2026-01-22" },
  { firstName: "Michael", lastName: "Brown", rating: 5, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.", dateSubmitted: "2026-02-03" },
  { firstName: "Emily", lastName: "Davis", rating: 5, review: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.", dateSubmitted: "2026-02-10" },
  { firstName: "Daniel", lastName: "Wilson", rating: 4, review: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.", dateSubmitted: "2026-02-18" },
  { firstName: "Olivia", lastName: "Taylor", rating: 5, review: "At vero eos et accusamus et iusto odio dignissimos ducimus.", dateSubmitted: "2026-02-27" },
  { firstName: "Matthew", lastName: "Anderson", rating: 3, review: "Temporibus autem quibusdam et aut officiis debitis aut rerum.", dateSubmitted: "2026-03-06" },
  { firstName: "Sophia", lastName: "Thomas", rating: 5, review: "Nam libero tempore, cum soluta nobis est eligendi optio.", dateSubmitted: "2026-03-12" },
  { firstName: "James", lastName: "Jackson", rating: 4, review: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.", dateSubmitted: "2026-03-20" },
  { firstName: "Isabella", lastName: "White", rating: 5, review: "Duis aute irure dolor in reprehenderit in voluptate velit esse.", dateSubmitted: "2026-03-28" },
  { firstName: "Benjamin", lastName: "Harris", rating: 4, review: "Excepteur sint occaecat cupidatat non proident.", dateSubmitted: "2026-04-04" },
  { firstName: "Mia", lastName: "Martin", rating: 5, review: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.", dateSubmitted: "2026-04-11" },
  { firstName: "Jacob", lastName: "Thompson", rating: 4, review: "Vivamus suscipit tortor eget felis porttitor volutpat.", dateSubmitted: "2026-04-18" },
  { firstName: "Charlotte", lastName: "Garcia", rating: 5, review: "Pellentesque in ipsum id orci porta dapibus.", dateSubmitted: "2026-04-26" },
  { firstName: "William", lastName: "Martinez", rating: 3, review: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.", dateSubmitted: "2026-05-03" },
  { firstName: "Amelia", lastName: "Robinson", rating: 5, review: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.", dateSubmitted: "2026-05-10" },
  { firstName: "Ethan", lastName: "Clark", rating: 4, review: "Donec sollicitudin molestie malesuada.", dateSubmitted: "2026-05-18" },
  { firstName: "Harper", lastName: "Rodriguez", rating: 5, review: "Curabitur aliquet quam id dui posuere blandit.", dateSubmitted: "2026-05-25" },
  { firstName: "Alexander", lastName: "Lewis", rating: 4, review: "Nulla porttitor accumsan tincidunt.", dateSubmitted: "2026-06-02" },
  { firstName: "Evelyn", lastName: "Lee", rating: 5, review: "Quisque velit nisi, pretium ut lacinia in, elementum id enim.", dateSubmitted: "2026-06-09" }
]; 

const testimonials = [
  { firstName: "Noah", lastName: "Walker", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", dateSubmitted: "2026-01-17" },
  { firstName: "Ava", lastName: "Hall", review: "Praesent vitae lectus nec urna interdum vulputate.", dateSubmitted: "2026-01-25" },
  { firstName: "Liam", lastName: "Allen", review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.", dateSubmitted: "2026-02-05" },
  { firstName: "Emma", lastName: "Young", review: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.", dateSubmitted: "2026-02-13" },
  { firstName: "Elijah", lastName: "Hernandez", review: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.", dateSubmitted: "2026-02-21" },
  { firstName: "Sophia", lastName: "King", review: "At vero eos et accusamus et iusto odio dignissimos ducimus.", dateSubmitted: "2026-03-01" },
  { firstName: "Lucas", lastName: "Wright", review: "Temporibus autem quibusdam et aut officiis debitis aut rerum.", dateSubmitted: "2026-03-08" },
  { firstName: "Mia", lastName: "Lopez", review: "Nam libero tempore, cum soluta nobis est eligendi optio.", dateSubmitted: "2026-03-16" },
  { firstName: "Mason", lastName: "Hill", review: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.", dateSubmitted: "2026-03-24" },
  { firstName: "Charlotte", lastName: "Scott", review: "Duis aute irure dolor in reprehenderit in voluptate velit esse.", dateSubmitted: "2026-04-01" },
  { firstName: "Logan", lastName: "Green", review: "Excepteur sint occaecat cupidatat non proident.", dateSubmitted: "2026-04-08" },
  { firstName: "Amelia", lastName: "Adams", review: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.", dateSubmitted: "2026-04-15" },
  { firstName: "Jackson", lastName: "Baker", review: "Vivamus suscipit tortor eget felis porttitor volutpat.", dateSubmitted: "2026-04-23" },
  { firstName: "Harper", lastName: "Gonzalez", review: "Pellentesque in ipsum id orci porta dapibus.", dateSubmitted: "2026-05-01" },
  { firstName: "Sebastian", lastName: "Nelson", review: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.", dateSubmitted: "2026-05-08" },
  { firstName: "Evelyn", lastName: "Carter", review: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.", dateSubmitted: "2026-05-15" },
  { firstName: "Aiden", lastName: "Mitchell", review: "Donec sollicitudin molestie malesuada.", dateSubmitted: "2026-05-22" },
  { firstName: "Abigail", lastName: "Perez", review: "Curabitur aliquet quam id dui posuere blandit.", dateSubmitted: "2026-05-29" },
  { firstName: "Henry", lastName: "Roberts", review: "Nulla porttitor accumsan tincidunt.", dateSubmitted: "2026-06-05" },
  { firstName: "Ella", lastName: "Turner", review: "Quisque velit nisi, pretium ut lacinia in, elementum id enim.", dateSubmitted: "2026-06-12" }
];

export default testimonials;
/*export default testimonialsWithRatings;*/