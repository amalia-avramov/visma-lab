package com.doubletex.app.errors;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.time.LocalDateTime;

@Getter
@RequiredArgsConstructor
@ResponseStatus(HttpStatus.NOT_FOUND)
public class DbtNotFound extends RuntimeException{
    private int httpCode=HttpStatus.NOT_FOUND.value();
    private Long id;
    private Class<?> entityClass;
    private LocalDateTime time=LocalDateTime.now();

    public DbtNotFound(Class<?> entityClass,Long id){
        this.entityClass=entityClass;
        this.id=id;
    }

    @Override
    public String getMessage(){
        return "An entity of types " + entityClass.getSimpleName() + " with id: " + id + " was not found!";
    }
}
