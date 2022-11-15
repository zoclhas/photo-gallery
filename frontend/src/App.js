import { Grid, Text } from "@nextui-org/react";

import { ThemeSwitches } from "./components/ThemeSwitcher/ThemeSwitches";
import Gallery from "./components/Gallery/Gallery";

import styles from "./styles.module.css";

function App() {
    return (
        <Grid.Container>
            <Grid sm={3} xs={12} className={styles.profile}>
                <Text h1>
                    Zoc's
                    <Text
                        size="3rem"
                        css={{
                            textGradient:
                                "9deg, $purple600 -20%, $pink600 100%",
                        }}
                        weight="bold"
                    >
                        Photography
                    </Text>
                    Collection
                </Text>
                <ThemeSwitches styles={styles} />
            </Grid>
            <Grid sm={9} xs={12} className={styles.images}>
                <Gallery styles={styles} />
            </Grid>
        </Grid.Container>
    );
}

export default App;
