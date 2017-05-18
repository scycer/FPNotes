# Existing solutions to solving JS problems more functionally

## Delayed Async with Success/Failure handling
- Ramda-fantasy
    - Future    
- Folktale
    - Task

## Delayed Async but no handling (Wrap in Either/maybe?)
- Ramda-fantasy
    - IO   

## Possible Value handling
- Maybe = Just/Nothing
- Either = Left/Right (usually fail/success)

- Ramda-fantasy
    - Maybe
    - Either
- Folktale
    - Maybe
    - Either / Validation
- Sanctuary
    - Maybe
    - Either

# Pure Functions librarues
- Ramda (watch for undefined returns)
- Sanctuary (Safe ramda returns i.e. Maybe)