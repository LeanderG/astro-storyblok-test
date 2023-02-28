import { baseTheme, Button, Text, Input } from "@neui/styleguide-commerzbank";
import { HStack, VStack } from "@neui/layout";

export function NeuUiTest() {
  return (
    <div className={`${baseTheme}`}>
      <HStack justifyContent="center" paddingTop="10rem">
        <VStack spacing="90px" maxWidth="450px">
          <VStack spacing="30px">
            <Text type="highlight">
              Bitte geben Sie Ihre persönlichen Daten an
            </Text>
            <Text>
              Die persönlichen Daten benötigen wir für die Anbahnung und
              Durchführung der Vertragsbeziehungen.{" "}
            </Text>
            <Input label="Vorname" />
            <Input label="Nachname" />
            <Input label="Ggf. Geburtsname (optional)" />
            <Input label="Geburtsdatum: TT.MM.JJJJ" />
            <Input label="Geburtsort" />
            <Input
              label="Staatangehörigkeit (Land)"
              defaultValue="Deutschland"
            />
          </VStack>
          <HStack justifyContent="end">
            <Button>Weiter</Button>
          </HStack>
        </VStack>
      </HStack>
    </div>
  );
}
