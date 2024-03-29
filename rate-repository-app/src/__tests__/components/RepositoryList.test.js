import {render, screen} from "@testing-library/react-native";
import {RepositoryListContainer} from "../../components/RepositoryList";


describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const data = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            const repositories = data.edges.map(value => value.node);

            render(<RepositoryListContainer repositories={repositories}/>)
            const repositoryItems = screen.getAllByTestId("repositoryItem");
            const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

            //first
            expect(firstRepositoryItem).toHaveTextContent("jaredpalmer/formik")//name
            expect(firstRepositoryItem).toHaveTextContent("Build forms in React, without the tears")//desc
            expect(firstRepositoryItem).toHaveTextContent("TypeScript")
            expect(firstRepositoryItem).toHaveTextContent("21.9k")  //stars
            expect(firstRepositoryItem).toHaveTextContent("1.6k")   //forks
            expect(firstRepositoryItem).toHaveTextContent("3")      //reviews
            expect(firstRepositoryItem).toHaveTextContent("88")     //rating

            //second
            expect(secondRepositoryItem).toHaveTextContent("async-library/react-async")//name
            expect(secondRepositoryItem).toHaveTextContent("Flexible promise-based React data loader")//desc
            expect(secondRepositoryItem).toHaveTextContent("JavaScript")
            expect(secondRepositoryItem).toHaveTextContent("1.8k")  //stars
            expect(secondRepositoryItem).toHaveTextContent("69")   //forks
            expect(secondRepositoryItem).toHaveTextContent("3")      //reviews
            expect(secondRepositoryItem).toHaveTextContent("72")     //rating

        });
    });
});